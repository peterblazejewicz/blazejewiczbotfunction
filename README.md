# blazejewiczbotfunction

A CI repo for Azure functions

## Remove errors in Azure CLI tools

### Remove `Worker encountered an error`

That's just because Azure Func does not support Node 9.*/10.* yet. Use `nvm`:

```bash
nvm use v8.9.4
```

### `JAVA_HOME` error

> Unable to configure java worker. Could not find JAVA_HOME app setting.

Just update your `PATH` environment, e.g.:

```bash
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home"
export PATH="$PATH:$JAVA_HOME/bin"
```

## Author

@peterblazejewicz