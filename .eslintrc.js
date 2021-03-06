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
        // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "arrow-body-style": "off",
        "no-console": "off",
        "no-plusplus": "off",
        "no-unused-vars": "warn",
        "no-unused-expressions": ["error", {
            "allowShortCircuit": true,
            "allowTernary": true,
        }],
        // ---
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        "react/button-has-type": "off",
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": ["warn", { ignore: ['history', 'location', 'match']}],

        "import/no-unresolved": ["error", { ignore: ['@']}],
        "import/prefer-default-export": "off",

        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off"
    }
};
