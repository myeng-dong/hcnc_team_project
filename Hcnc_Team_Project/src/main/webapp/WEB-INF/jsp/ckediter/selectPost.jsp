<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: 'Malgun Gothic', Arial, sans-serif; 
            margin: 15px; 
            line-height: 1.6; 
            color: #333;
        }
        img { max-width: 100%; height: auto; }
        table { border-collapse: collapse; width: 100%; }
        table, th, td { border: 1px solid #ddd; }
        th, td { padding: 8px; text-align: left; }
    </style>
</head>
<body>
    <div id="content">내용을 로드하는 중...</div>
    
    <script>
        function setContent(htmlContent) {
        	
            document.getElementById('content').innerHTML = htmlContent || '내용이 없습니다.';
            
            
        }
    </script>
</body>
</html>