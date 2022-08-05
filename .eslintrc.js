const prettierConfig = require("./.prettierrc")

module.exports = {
    extends: ["elmsd/js", "elmsd/jsx"],
    parserOptions: { ecmaVersion: 2020 },
    rules: {
        "no-param-reassign": "off",
        "no-use-before-define": "off",
        "prettier/prettier": ["error", prettierConfig],
        "react/prop-types": "off"
    },
    ignorePatterns: ["**/dist/**/*.js", "**/node_modules/**/*.js"]
}
