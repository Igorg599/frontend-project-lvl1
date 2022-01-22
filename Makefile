install:
	npm install
brain-games:
	node bin/brain-games.js
even-games:
	node bin/brain-even.js
calc-games:
	node bin/brain-calc.js
gcd-games:
	node bin/brain-gcd.js
progression-games:
	node bin/brain-progression.js
prime-games:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .