# Snapshot report for `test/index.test.js`

The actual snapshot is saved in `index.test.js.snap`.

Generated by [AVA](https://ava.li).

## basic

> Snapshot 1

    `<template>␊
      <div class="vuedown"><h1 id="say-hi">Say hi</h1>␊
    <greet name="evillt" />␊
    </div>␊
    </template>␊
    ␊
    `

## with vue features

> Snapshot 1

    `<template>␊
      <div class="vuedown"><h1 id="im--name-">I&#39;m {{ name }}</h1>␊
    </div>␊
    </template>␊
    ␊
    <script>␊
    export default {␊
      data() {␊
        return {␊
          name: 'evillt'␊
        }␊
      }␊
    }␊
    </script>␊
    `

## wrap html

> Snapshot 1

    `<template>␊
      <div class="wrapper"><h1 id="hi-there">Hi there</h1>␊
    </div>␊
    </template>␊
    ␊
    `