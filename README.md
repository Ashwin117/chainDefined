# chainDefined

Have you been tired of doing multiple null checks as such?

```js
if (req && req.body && req.body.user && req.body.user.first_name) {
	...
}
```

Well, now you can just do this with chainDefined:

```js
chainDefined = require('chainDefined');

if (chainDefined(req, ['body', 'user', 'first_name'])) {
	...
}
```

This has 100% unit test code coverage and is very fast. Use `Performance` library to check for yourself!