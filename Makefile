.PHONY: dockerbuild dockerrun dockerpush
TAG = $$(git describe --abbrev=0)
ORG = biqaps
NAME = dockerized-inquirer

dockerbuild:
	npm install
	npm run build
	docker build -f deploy/Dockerfile -t $(NAME):latest .

dockerrun:
	docker run --rm -it -p8080:80 $(NAME):latest /sbin/my_init

dockerpush:
	docker tag $(NAME):latest $(ORG)/$(NAME):$(TAG)
	docker login
	docker push $(ORG)/$(NAME):$(TAG)