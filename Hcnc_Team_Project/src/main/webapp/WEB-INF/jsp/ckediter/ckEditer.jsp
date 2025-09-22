<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CKEditor 5 with Image Upload</title>
    <link rel="stylesheet" href="https://cdn.ckeditor.com/ckeditor5/41.4.2/ckeditor5.css">
    <style>
        body, html { 
            margin: 0; 
            padding: 10px; 
            width: 100%; 
            height: 100%; 
            font-family: 'Malgun Gothic', Arial, sans-serif;
            background-color: #f8f9fa;
        }
        .loading {
            padding: 20px;
            text-align: center;
            color: #666;
            background: white;
            border-radius: 5px;
            margin: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .editor-container {
            background: white;
            border-radius: 5px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            height: calc(100% - 30px);
            display: flex;
            flex-direction: column;
        }
        #editor {
            flex: 1;
            min-height: 300px;
        }
        .ck-editor__editable {
            min-height: 300px !important;
        }
        .ck.ck-editor {
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .ck.ck-editor__main > .ck-editor__editable {
            border-radius: 0 0 5px 5px;
        }
        .ck.ck-toolbar {
            border-radius: 5px 5px 0 0;
        }
    </style>
</head>
<body>
    <div class="loading" id="loadingMsg">
        <div>📝 CKEditor를 로드하는 중...</div>
        <div style="font-size: 12px; margin-top: 5px;">잠시만 기다려주세요.</div>
    </div>
    
    <div class="editor-container" id="editorContainer" style="display:none;">
        <div id="editor"></div>
    </div>
    
    <!-- CKEditor 5 CDN으로 호출 해온다-->
    <script src="https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js"></script>
    
    <script>
        let myEditor;
        
        // 커스텀 Base64 이미지 업로드 어댑터
        class Base64UploadAdapter {
            constructor(loader) {
                this.loader = loader;
            }

            upload() {
                return this.loader.file
                    .then(file => new Promise((resolve, reject) => {
                        // 파일 타입 검사
                        if (!file.type.match(/^image\//)) {
                            reject('이미지 파일만 업로드할 수 있습니다.');
                            return;
                        }
                        
                        // 파일 크기 검사 (5MB)
                        if (file.size > 5 * 1024 * 1024) {
                            reject('파일 크기는 5MB 이하여야 합니다.');
                            return;
                        }
                        
                        const reader = new FileReader();
                        
                        reader.onload = () => {
                            resolve({
                                default: reader.result
                            });
                        };
                        
                        reader.onerror = () => {
                            reject('파일을 읽을 수 없습니다.');
                        };
                        
                        reader.readAsDataURL(file);
                    }));
            }

            abort() {
                // Base64 변환은 중단할 수 없음
            }
        }

        // 업로드 어댑터 플러그인
        function Base64UploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new Base64UploadAdapter(loader);
            };
        }
        
        // CKEditor 5 초기화
        ClassicEditor
            .create(document.querySelector('#editor'), {
                // 업로드 어댑터 플러그인 추가
                extraPlugins: [Base64UploadAdapterPlugin],
                
                // 툴바 설정
                toolbar: {
                    items: [
                        'heading', '|',
                        'bold', 'italic', 'underline', 'strikethrough', '|',
                        'fontSize', 'fontColor', 'fontBackgroundColor', '|',
                        'alignment', '|',
                        'numberedList', 'bulletedList', '|',
                        'outdent', 'indent', '|',
                        'link', 'uploadImage', 'insertTable', 'blockQuote', '|',
                        'undo', 'redo'
                    ],
                    shouldNotGroupWhenFull: true
                },
                
                // 언어 설정
                language: 'ko',
                
                // 이미지 설정
                image: {
                    toolbar: [
                        'imageTextAlternative', '|',
                        'imageStyle:alignLeft',
                        'imageStyle:full', 
                        'imageStyle:alignRight'
                    ],
                    styles: [
                        'full',
                        'alignLeft',
                        'alignRight'
                    ]
                },
                
                // 표 설정
                table: {
                    contentToolbar: [
                        'tableColumn', 'tableRow', 'mergeTableCells',
                        'tableProperties', 'tableCellProperties'
                    ]
                },
                
                // 폰트 크기 옵션
                fontSize: {
                    options: [
                        9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36
                    ]
                },
                
                // 헤딩 옵션
                heading: {
                    options: [
                        { model: 'paragraph', title: '본문', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: '제목 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: '제목 2', class: 'ck-heading_heading2' },
                        { model: 'heading3', view: 'h3', title: '제목 3', class: 'ck-heading_heading3' }
                    ]
                },
                
                // 링크 설정
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://'
                },
                
                // 자동 저장 비활성화 (선택사항)
                autosave: {
                    save( editor ) {
                        // 자동 저장 로직 (필요시 구현)
                        return Promise.resolve();
                    }
                }
            })
            .then(editor => {
                myEditor = editor;
                
                // 로딩 메시지 숨기고 에디터 표시
                document.getElementById('loadingMsg').style.display = 'none';
                document.getElementById('editorContainer').style.display = 'flex';
                
                console.log('CKEditor 5 준비 완료');
                
                // 초기 내용 설정
                editor.setData('');
                
                // 내용 변경 리스너
                editor.model.document.on('change:data', () => {
                    if (window.parent && window.parent.onEditorContentChange) {
                        try {
                            window.parent.onEditorContentChange(editor.getData());
                        } catch(e) {
                            // 부모 창 알림 실패는 무시
                        }
                    }
                });
                
                // 부모창에 준비 완료 알림
                if (window.parent && window.parent.onEditorReady) {
                    try {
                        window.parent.onEditorReady();
                    } catch(e) {
                        console.log('부모 창 알림 실패:', e);
                    }
                }
            })
            .catch(error => {
                console.error('CKEditor 5 초기화 오류:', error);
                document.getElementById('loadingMsg').innerHTML = 
                    '<div style="color: red;">에디터 로드 실패</div>' +
                    '<div style="font-size: 12px; margin-top: 5px;">페이지를 새로고침해주세요.</div>';
            });
        
        // 넥사크로 callMethod용 함수들 (매개변수 방식)
        function getEditorContent(dummy) {
            try {
                if (myEditor && typeof myEditor.getData === 'function') {
                    var content = myEditor.getData();
                    console.log('에디터 내용 반환:', content.substring(0, 100) + '...');
                    return content;
                } else {
                    console.log('에디터가 준비되지 않음');
                    return '';
                }
            } catch (error) {
                console.error('getEditorContent 오류:', error);
                return '';
            }
        }
        
        function setEditorContent(content) {
            try {
                if (myEditor && typeof myEditor.setData === 'function') {
                    myEditor.setData(content);
                    console.log('에디터 내용 설정 완료:', content.substring(0, 50) + '...');
                    return 'success';
                } else {
                    console.log('에디터가 준비되지 않아 내용 설정 실패');
                    return 'not_ready';
                }
            } catch (error) {
                console.error('setEditorContent 오류:', error);
                return 'error';
            }
        }
        
        function isEditorReady(dummy) {
            try {
                var ready = myEditor != null && typeof myEditor.getData === 'function';
                console.log('에디터 준비 상태:', ready);
                return ready;
            } catch (error) {
                console.error('isEditorReady 오류:', error);
                return false;
            }
        }
        
        function focusEditor() {
            if (myEditor) {
                myEditor.editing.view.focus();
            }
        }
        
        function insertText(text) {
            if (myEditor) {
                const viewFragment = myEditor.data.processor.toView(text);
                const modelFragment = myEditor.data.toModel(viewFragment);
                myEditor.model.insertContent(modelFragment);
            }
        }
        
        function insertHtml(html) {
            if (myEditor) {
                const viewFragment = myEditor.data.processor.toView(html);
                const modelFragment = myEditor.data.toModel(viewFragment);
                myEditor.model.insertContent(modelFragment);
            }
        }
        
        // 에디터 상태 체크 함수
        function getEditorStatus() {
            if (myEditor) {
                return {
                    status: 'ready',
                    readOnly: myEditor.isReadOnly,
                    contentLength: myEditor.getData().length,
                    version: '5.x'
                };
            }
            return { status: 'not_initialized' };
        }
        
        // 워드 카운트 함수 (선택사항)
        function getWordCount() {
            if (myEditor && myEditor.plugins.has('WordCount')) {
                const wordCount = myEditor.plugins.get('WordCount');
                return {
                    characters: wordCount.characters,
                    words: wordCount.words
                };
            }
            return null;
        }
        
        // 전역 에러 핸들링
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            console.error('에디터 오류:', msg, 'at', url + ':' + lineNo + ':' + columnNo);
            return false;
        };
        
        // Unhandled Promise Rejection 핸들링
        window.addEventListener('unhandledrejection', function(event) {
            console.error('Promise 에러:', event.reason);
            event.preventDefault();
        });
    </script>
</body>
</html>