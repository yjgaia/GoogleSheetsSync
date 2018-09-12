GoogleSheetsSync.MAIN = METHOD({
	
	run : (addRequestHandler) => {
		
		if (CPU_CLUSTERING.getWorkerId() === 1) {
			
			if (NODE_CONFIG.GoogleSheetsSync !== undefined) {
				
				let load = RAR(() => {
					
					EACH(NODE_CONFIG.GoogleSheetsSync, (url, path) => {
						
						GET(url, (content) => {
							
							WRITE_FILE({
								path : path,
								content : content
							});
						});
					});
				});
				
				// 페이지를 새로고침할 때마다 불러옵니다.
				addRequestHandler(() => {
					load();
				});
			}
		}
	}
});
