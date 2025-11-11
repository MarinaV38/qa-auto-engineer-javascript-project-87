.PHONY: install test lint

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

JSON:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

YAML:
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yml
