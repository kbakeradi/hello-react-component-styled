# HELP
help:
	@echo "\nTARGETS:\n"
	@make -qpRr | egrep -e '^[a-z].*:$$' | sed -e 's~:~~g' | sort
	@echo ""
list:
	make help


publish:	# push build and publish component to npm registry
	npm version minor && git push && npm run build && npm publish
