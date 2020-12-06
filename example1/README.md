# Deno Performance

This apps build using deno

# How to run

## Docker

This is prefered as you don't need to install deno on your machine as long as you're a docker user

### Run the tests

```shell
docker run -it --init -v $PWD:/app hayd/alpine-deno:1.5.4 test
```

## Installed deno

### Run the tests

```shell
deno run test
```
