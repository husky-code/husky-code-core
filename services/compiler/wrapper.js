module.exports = {
	wrapScript: function(script) {
		return "public class Test { public static void main(String[] args) { " + script + "} }";
	}
};