var LazyLoadImage = (function(){
    return {
        setSrc: function(ele,eleUrl) {
            // console.log('开始下载图片吧');
            // ele.setAttribute("origin_src",eleUrl);
            // const url = ele.getAttribute("origin_src");
            // if(!url) return;
            const oImg = document.createElement("img");
            // 不会影响页面,none会离开文档流
            // opacity: 0 这个会撑长页面
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            // oImg.setAttribute("origin_src",eleUrl);
            oImg.src=eleUrl;
            // console.log(url);
            // 异步
            oImg.onload = function() {
                ele.style.backgroundImage = `url(${eleUrl})`;
                document.body.removeChild(this);
                // 不会立即执行
                // 后执行
            }
        },
        
        replaceSrc: function(ele,eleUrl) {
            
            const oImg = document.createElement("img");
            
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            oImg.src=eleUrl;
            oImg.onload = function() {
                ele.src = eleUrl;
                document.body.removeChild(this);
            }
        }
    }
 })();