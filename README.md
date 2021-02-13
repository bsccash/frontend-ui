![Bsc Cash Title Image](https://raw.githubusercontent.com/Bsc-Cash/bsccash-protocol/master/assets/bg.jpeg)

# Bsc Cash  Interface

This is front-end repository of the [bsc.cash](https://bsc.cash/).

## 💻 Set Up Environment

To begin, you need to install dependencies with Yarn.

```
 $ yarn
```

You should update **default provider URL** because our production provider URL is limited by CORS for security.
On `src/config.ts`, please replace it:

```diff
- defaultProvider: 'BSC_SEED_PROVIDER',
+ defaultProvider: 'BSC_SEED_PROVIDER',
```

After it, you can launch the development server with following command.

```
 $ yarn start
```



## ⚒ Contributions

Contributions are welcome!
please feel free to send PRs to the bsccash-frontend.

## LICENSE: LGPL
