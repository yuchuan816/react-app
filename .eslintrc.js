module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-plusplus": "off",
        // ---
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        "react/button-has-type": "off",
        "react/prop-types": ["warn", { ignore: ['history', 'location', 'match']}],

        "import/no-unresolved": ["error", { ignore: ['@']}],

        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off"
    }
};
