# blazejewiczbotfunction

A CI repo for Azure functions


## Remove errors in Azure CLI tools

### `JAVA_HOME` error

> Unable to configure java worker. Could not find JAVA_HOME app setting.

Just update your `PATH` environment, e.g.:

```bash
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home"
export PATH="$PATH:$JAVA_HOME/bin"
```

## Author

@peterblazejewicz