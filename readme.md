Required:
Docker or Bun installed

For launch tests use those commands:
```sh
// With docker
docker run --rm -v $(pwd):/home/bun/app -w /home/bun/app oven/bun:1.0 sh -c "bun test"

// or

// With bun
bun test
```