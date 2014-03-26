/**
 * @license BlockEvilBrowser v1.0.0 
 * (c) 2012-2014 Nerdammer.it, http://www.nerdammer.it 
 * License: MIT
 * Author: guarino valerio
 */

(function() {

	var t = true;
	var ie_min_version = 8;
	var firefox_min_version = 10.0;
	var opera_min_version = 10.0;
	var safari_min_version = 5;
	var chrome_min_version = 20;

	function detect(ua) {

		function getFirstMatch(regex) {
			var match = ua.match(regex);
			return (match && match.length > 1 && match[1]) || '';
		}

		if (/opera|opr/i.test(ua)) {
			result = {
				name : 'Opera',
				opera : t,
				version : versionIdentifier
						|| getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
			};
		} else if (/msie|trident/i.test(ua)) {
			result = {
				name : 'Internet Explorer',
				msie : t,
				version : getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
			};
		} else if (/chrome|crios|crmo/i.test(ua)) {
			result = {
				name : 'Chrome',
				chrome : t,
				version : getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
			};
		}  else if (/firefox|iceweasel/i.test(ua)) {
			result = {
				name : 'Firefox',
				firefox : t,
				version : getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
			};
		}  else if (/safari/i.test(ua)) {
			result = {
				name : 'Safari',
				safari : t,
				version : versionIdentifier
			};
		} else {
			result = {};
		}

		if (/(apple)?webkit/i.test(ua)) {
			result.name = result.name || "Webkit";
			result.webkit = t;
			if (!result.version && versionIdentifier) {
				result.version = versionIdentifier;
			}
		} else if (!result.opera && /gecko\//i.test(ua)) {
			result.name = result.name || "Gecko";
			result.gecko = t;
			result.version = result.version
					|| getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
		}

		if ((result.msie && result.version >= ie_min_version)
				|| (result.chrome && result.version >= chrome_min_version)
				|| (result.firefox && result.version >= firefox_min_version)
				|| (result.safari && result.version >= safari_min_version)
				|| (result.opera && result.version >= opera_min_version)
				) {
			result.full_support = t;
		} else if ((result.msie && result.version < ie_min_version)
				|| (result.chrome && result.version < chrome_min_version)
				|| (result.firefox && result.version < firefox_min_version)
				|| (result.safari && result.version < safari_min_version)
				|| (result.opera && result.version < opera_min_version)
				) {
			result.unsupported = t;
		} else
			result.unknown = t;

		return result;
	}

	if(document.body==null){
		document.write("bad location for browser blocker, insert after body tag");
		return;
	}
	
	var resultDetect = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '');
	
	if (resultDetect.unsupported) {
		document.body.className = "";
		document.body.innerHTML ="";
		 
		var div1 = document.createElement("div");
	    div1.innerHTML = "<br/><br/><br/><br/><h1 style=\"text-align:center\">Per motivi di sicurezza il sito non può essere visualizzato con il browser attualmente in uso</h1>";
	    document.body.appendChild(div1);
	    
	    var div2 = document.createElement("div");
	    div2.innerHTML = "<br/><br/><br/><br/><br/><br/><div style=\"text-align:center\">"+navigator.userAgent+"</div><br/>";
	    document.body.appendChild(div2);
	    
	    var ballottScreen="<div id=\"browsers\" class=\"browsers\"><table cellspacing=\"8\" cellpadding=\"8\" width=\"80%\" align=\"center\" style=\"background-color:#fff !important;\" id=\"_tableDescription\" summary=\"Seleziona i tuoi browser\"><tbody><tr><th><img class=\"browserImg\" id=\"_img_2\" alt=\"Google Chrome\" title=\"Google Chrome\" src=\"http://www.browserchoice.eu/Resources/Images/Chrome_logo.png\"></th><th><img class=\"browserImg\" id=\"_img_3\" alt=\"Mozilla Firefox\" title=\"Mozilla Firefox\" src=\"http://www.browserchoice.eu/Resources/Images/Mozilla_logo.png\"></th><th><img class=\"browserImg\" id=\"_img_4\" alt=\"Internet Explorer® \" title=\"Internet Explorer® \" src=\"http://www.browserchoice.eu/Resources/Images/BrowserChoice_EU.png\"></th><th><img class=\"browserImg\" id=\"_img_5\" alt=\"Browser Web Opera\" title=\"Browser Web Opera\" src=\"http://www.browserchoice.eu/Resources/Images/Opera_logo.png\"></th></tr><tr><td id=\"_description_2\">Un browser nuovo e veloce, firmato Google. Provalo subito!</td><td id=\"_description_3\">La tua sicurezza online è la nostra priorità principale. Firefox è gratuito e sviluppato per ottenere il massimo dalla navigazione sul Web.</td><td id=\"_description_4\">Veloce, pulito, affidabile. Il browser per Windows più diffuso al mondo. Gratis sul sito Microsoft.</td><td id=\"_description_5\">Passate a un browser migliore. Opera è veloce, efficiente e facile da usare.</td></tr><tr><td><div class=\"browserTableLink\"><a target=\"_blank\" id=\"_installLink_2\" href=\"http://go.microsoft.com/fwlink/?LinkID=166937\">Installa</a></div></td><td><div class=\"browserTableLink\"><a target=\"_blank\" id=\"_installLink_3\" href=\"http://go.microsoft.com/fwlink/?LinkID=166932\">Installa</a></div></td><td><div class=\"browserTableLink\"><a target=\"_blank\" id=\"_installLink_4\" href=\"http://go.microsoft.com/fwlink/?LinkID=166930\">Installa</a></div></td><td><div class=\"browserTableLink\"><a target=\"_blank\" id=\"_installLink_5\" href=\"http://go.microsoft.com/fwlink/?LinkID=166934\">Installa</a></div></td></tr></tbody></table></div>";
	    var div3 = document.createElement("div");
	    div3.innerHTML =ballottScreen;
	    document.body.appendChild(div3);
	}

})();