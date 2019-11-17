// Browser Version
browser = (function(){

    check_browser = function() {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            return {name:'IE',version:(tem[1]||'')};
            }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR|Edge\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }   
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
        name: M[0],
        version: M[1]
        };
    }

    curbrowser = check_browser();

    switch (curbrowser.name) {
        case "Firefox":
            if (curbrowser.version > 42) {
                break;
            }

        case "Chrome":
            if (curbrowser.version > 56) {
                break;
            }

        case "Safari":
            if (curbrowser.version > 10) {
                break;
            }

        case "Edge":
            if (curbrowser.version > 42) {
                break;
            }

        case "Opera":
            if (curbrowser.version > 43) {
                break;
            }

    
        default:
            location.replace("unsuported.html");
    }

})();