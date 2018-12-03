# Android gradle 同步设置

## maven 源置换

可在 `build.gradle` 中加入如下代码，将所有依赖工程的 google maven 仓库地址修改为国内镜像地址:

```gradle
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            url 'https://dl.google.com/dl/android/maven2/'
            name 'Google'
        }
        def REPOSITORY_URL = 'https://dl.google.com/dl/android/maven2/'
        all { ArtifactRepository repo ->
            if(repo instanceof MavenArtifactRepository){
                def url = repo.url.toString()
                if (url.startsWith('https://maven.google.com')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $REPOSITORY_URL."
                    remove repo
                }
            }
        }
        maven {
            url REPOSITORY_URL
        }
    }
}

```

## compileSdkVersion 以及 buildToolsVersion 版本统一

`compileSdkVersion` 以及 `buildToolsVersion` 版本不兼容会导致很多奇怪的问题，可以在 `build.gradle` 中添加如下脚本，使所有依赖工程的构建版本都保持一致：

```gradle
subprojects {
    afterEvaluate {
        project ->
        if (project.hasProperty("android")) {
            android {
                compileSdkVersion 27
                buildToolsVersion '27.0.3'
            }
        }
     }
}
```

## android.support 依赖版本统一

`android.support` 版本不兼容会导致打包编译失败
同理，通过脚本实现统一配置

```gradle
subprojects {
    project.configurations.all {
        resolutionStrategy.eachDependency { details ->
            if (details.requested.group == 'com.android.support'
                    && !details.requested.name.contains('multidex')) {
                details.useVersion "27.1.0"
            }
        }
    }
}
```
