<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CKEditor 5 with Image Upload</title>
    <!-- CKEditor 5 CDN 스크립트 -->
    <script src="https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js"></script>
    <style>
        /* CKEditor가 부모 WebBrowser 크기에 맞게 채워지도록 설정 */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; /* 스크롤바 방지 */
        }
        #editor {
            width: 100%;
            height: 100%;
        }
        .ck-editor__editable {
            height: calc(100% - 80px) !important; /* 툴바 높이 제외 */
        }
    </style>
</head>
<body>
    <textarea id="editor"></textarea>
    <script>
        let myEditor;
        
        // 간단한 Base64 업로드 어댑터 (서버 구현 불필요)
        class SimpleUploadAdapter {
            constructor(loader) {
                this.loader = loader;
            }

            upload() {
                return this.loader.file.then(file => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        
                        reader.onload = function() {
                            resolve({
                                default: reader.result
                            });
                        };
                        
                        reader.onerror = function() {
                            reject('파일을 읽을 수 없습니다.');
                        };
                        
                        reader.readAsDataURL(file);
                    });
                });
            }

            abort() {
                // Base64 변환은 중단할 수 없음
            }
        }

        // 플러그인 팩토리 함수
        function MyCustomUploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new SimpleUploadAdapter(loader);
            };
        }

        ClassicEditor
            .create(document.querySelector('#editor'), {
                extraPlugins: [MyCustomUploadAdapterPlugin],
                toolbar: {
                    items: [
                        'heading', '|',
                        'bold', 'italic', 'underline', 'strikethrough', '|',
                        'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', '|',
                        'alignment', '|',
                        'numberedList', 'bulletedList', '|',
                        'outdent', 'indent', '|',
                        'todoList', '|',
                        'link', 'imageUpload', 'insertTable', 'blockQuote', '|',
                        'undo', 'redo'
                    ],
                    shouldNotGroupWhenFull: true
                },
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
                // 테이블 설정
                table: {
                    contentToolbar: [
                        'tableColumn', 'tableRow', 'mergeTableCells',
                        'tableProperties', 'tableCellProperties'
                    ]
                },
                // 언어 설정 (한국어)
                language: 'ko'
            })
            .then(editor => {
                myEditor = editor;
                console.log('CKEditor 초기화 완료');
            })
            .catch(error => {
                console.error('CKEditor 초기화 오류:', error);
            });

        // 넥사크로에서 호출할 수 있는 함수들
        function getEditorContent() {
            if (myEditor) {
                return myEditor.getData();
            }
            return '';
        }

        function setEditorContent(content) {
            if (myEditor) {
                myEditor.setData(content);
            }
        }

        // 에디터 상태 확인
        function isEditorReady() {
            return myEditor != null;
        }

        // 에디터 포커스
        function focusEditor() {
            if (myEditor) {
                myEditor.editing.view.focus();
            }
        }
    </script>
</body>
</html>