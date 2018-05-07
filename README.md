# blazejewiczbotfunction

A CI repo for Azure functions.

![image](https://user-images.githubusercontent.com/14539/39724147-3d7a9aec-5248-11e8-9913-e069139684e3.png)

Local debugging for TypeScript files is not supported yet.

```bash
[5/7/18 8:39:32 PM] The following 2 functions are in error:
[5/7/18 8:39:32 PM] GenericWebhookTS1: Object reference not set to an instance of an object.
[5/7/18 8:39:32 PM] SampleHttpTrigger: Object reference not set to an instance of an object.
```

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