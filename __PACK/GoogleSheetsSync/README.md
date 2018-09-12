# GoogleSheetsSync
구글 시트 파일을 CSV 형태로 매번 프로젝트 실행시에 다운로드합니다.

***반드시 개발중인 프로젝트에서만 사용해주시기 바랍니다.***

## 설치하기
프로젝트의 `DEPENDENCY` 파일에 `Hanul/GoogleSheetsSync`를 추가합니다.

## 사용 방법
1. 구글 시트 파일에서 메뉴에 들어가 `파일 - 웹에 게시`를 누릅니다.
2. 전체 문서가 아닌 `시트1`만 저장할 것이기 때문에 `시트1`을 선택합니다.
3. `csv` 방식으로 저장할 것이기 때문에 `웹페이지`가 아닌 `쉼표로 구분된 값(.csv)`를 선택합니다.
4. 이후 출력되는 링크 주소를 복사하여 [프로젝트 실행을 위한 코드](https://github.com/Hanul/UPPERCASE/blob/master/DOC/GUIDE/CREATE_PROJECT.md#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%ED%96%89%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1)에 아래와 같이 파일 경로와 주소를 입력합니다.

```javascript
require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'SampleProject',
		title : 'Sample Project',
		isDevMode : true,
		webServerPort : 8913
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true,
		dbName : 'SampleProject-test',
		
		// 이 부분입니다. 운영 시에는 이 부분을 작성하지 않습니다.
		GoogleSheetsSync : {
			'SampleProject/R/text.csv' : 'https://docs.google.com/spreadsheets/d/e/~~~~~/pub?gid=0&single=true&output=csv'
		}
	}
});
```

이제 프로젝트를 실행하면 지정된 경로에 파일을 다운로드 받습니다. 또한 페이지를 새로고침할 때마다 다시 다운로드 받기 때문에 싱크를 유지할 수 있습니다.

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)
