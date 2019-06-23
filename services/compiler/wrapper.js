var javaWrapper = {
		header: "public class Test { public static void main(String[] args) { ",
		footer: "} }"
};
module.exports = {
	wrapScript: function(script, lang) {
		if (lang == "java") {
			return javaWrapper.header + script + javaWrapper.footer;
			//return `public class Test { public static void main(String[] args) { ${this.script} } }`;
		}
		return "";
	}
};