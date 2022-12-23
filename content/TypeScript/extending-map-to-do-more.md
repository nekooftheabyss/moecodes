---
title: "Extending the Map to do more"
description: "A guide on extending the built-in JavaScript Map to add more operations and stuff."
head.image: "/neko.png"
date: "2022-05-29"
---

# Extending the Map

A **map** is an abstract data type composed of **key-value** pairs. JavaScript comes with the
built-in `Map`{lang="ts"} object that allows creating a map easily.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 const myMap = new Map();
 map.set("foo", "bar");
 console.log(map.get("foo"));
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 const myMap = new Map<string, string>();
 map.set("foo", "bar");
 console.log(map.get("foo"));
 ```
 :::
::

Pretty easy, isn't it?

However, the methods available on a Map are very limited, namely:

-   `Map.prototype.clear()`{lang="ts"}
-   `Map.prototype.delete()`{lang="ts"}
-   `Map.prototype.entries()`{lang="ts"}
-   `Map.prototype.forEach()`{lang="ts"}
-   `Map.prototype.get()`{lang="ts"}
-   `Map.prototype.has()`{lang="ts"}
-   `Map.prototype.keys()`{lang="ts"}
-   `Map.prototype.set()`{lang="ts"}
-   `Map.prototype.values()`{lang="ts"}

In this article, you'll be guided to extend the `Map`{lang="ts"} object and add more methods
for ease of use. The following are the list of methods we will be implementing:

-   `find()`{lang="ts"}
-   `filter()`{lang="ts"}
-   `map()`{lang="ts"}
-   `reduce()`{lang="ts"}

Now let's move on to implementing them.

## Extending a Class

Classes in JavaScript can be extended using the `extends`{lang="ts"} keyword.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 class ExtendedMap extends Map {
    constructor() {}
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 class ExtendedMap<K, V> extends Map<K, V> {
    constructor() {}
 }
 ```
 :::
::

Since we are extending an existing class, we should follow up with a `super()`{lang="ts"} call.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 class ExtendedMap extends Map {
    constructor() {
        super();
    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 class ExtendedMap<K, V> extends Map<K, V> {
    constructor() {
        super();
    }
 }
 ```
 :::
::

Cool. Next comes adding custom methods.

## Implementing Methods

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 class ExtendedMap extends Map {
    constructor() {
        super();
    }
    foo() {
        console.log("bar")
    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 class ExtendedMap<K, V> extends Map<K, V> {
    constructor() {
        super();
    }
    foo() {
        console.log("bar")
    }
 }
 ```
 :::
::

You should now be able to access the extended map.

```ts
const myMap = new ExtendedMap();
myMap.foo();
```

```stdout
bar
```

### Map.find()
The `find()`{lang="ts"} method performs a linear search on the collection and returns the
first element that passes our condition.

For this, we first convert our Map into an iterator. To do so, we use `Map.prototype.entries()`{lang="ts"}.
We can then iterate over the result using a `for..of` loop.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 find() {
    for (const [k, v] of this.entries()) {

    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 find(): V {
    for (const [k, v] of this.entries()) {
        
    }
 }
 ```
 :::
::

Our `find()`{lang="ts"} method needs one parameter, the test function. The function should return a truthy
value in order to return an element.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 find(fn) {
    for (const [k, v] of this.entries()) {

    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 // Let's be a bit strict with the 
 // test function's return type.
 find(fn: (v: V, k: K) => boolean): V {
    for (const [k, v] of this.entries()) {
        
    }
 }
 ```
 :::
::

Next is of course, running our test function on each entry in the map.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 find(fn) {
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) return v;
    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 find(fn: (v: V, k: K) => boolean): V {
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) return v;
    }
 }
 ```
 :::
::

There we have, our simple `find()`{lang="ts"} method. However, this method will
return NOTHING if it didn't find a match. In that case, we can return a `null`{lang="ts"}
or `undefined`{lang="ts"}.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 find(fn) {
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) return v;
    }
    return undefined;
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 find(fn: (v: V, k: K) => boolean): V | undefined {
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) return v;
    }
    return undefined;
 }
 ```
 :::
::


### Map.filter()
The `filter()`{lang="ts"} method performs a linear search on the collection and returns the
all elements that pass our condition.

The working is the same as our `find()`{lang="ts"} method.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 filter(fn) {
    for (const [k, v] of this.entries()) {

    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 filter(fn: (v: V, k: K) => boolean): V[] {
    for (const [k, v] of this.entries()) {
        
    }
 }
 ```
 :::
::

The only change is that we are returning an array of elements now.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 filter(fn) {
    const res = [];
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) res.push(v);
    }
    return res;
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 filter(fn: (v: V, k: K) => boolean): V[] {
    const res = [];
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) res.push(v);
    }
    return res;
 }
 ```
 :::
::

Unlike `find()`{lang="ts"}, method will return an empty array even if it didn't find a match. 
We don't need to explicitly return a fallback.

### Map.map()

`map()`{lang="ts"} is a bit different. It is a method which runs a function on every element
in the collection and returns an array of results.

Starting from where we left our `filter`{lang="ts"},

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 map(fn) {
    const res = [];
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) res.push(v);
    }
    return res;
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 map(fn: (v: V, k: K) => boolean): V[] {
    const res = [];
    for (const [k, v] of this.entries()) {
        if(fn(v, k)) res.push(v);
    }
    return res;
 }
 ```
 :::
::

All we need to do is, remove the condition and push the function result instead.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 map(fn) {
    const res = [];
    for (const [k, v] of this.entries()) {
        res.push(fn(v, k));
    }
    return res;
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 // Use the generic T for the function's result.
 map<T>(fn: (v: V, k: K) => T): T[] {
    const res = [];
    for (const [k, v] of this.entries()) {
        res.push(fn(v, k));
    }
    return res;
 }
 ```
 :::
::

Easy, is it not? Now comes the final part of this guide.

### Map.reduce()
The `reduce()`{lang="ts"} method accepts a reducer callback as a parameter
and executes the callback on each element, with the previous iteration's
result as a parameter. Like a chain.

Let's continue from where we left our `map()`{lang="ts"}.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 reduce(fn) {
    const res = [];
    for (const [k, v] of this.entries()) {
        res.push(fn(v, k));
    }
    return res;
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 // Use the generic T for the function's result.
 reduce<T>(fn: (v: V, k: K) => T): T[] {
    const res = [];
    for (const [k, v] of this.entries()) {
        res.push(fn(v, k));
    }
    return res;
 }
 ```
 :::
::

We will need two parameters, one being the callback and the other being the initial
value of our result.

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 reduce(fn, first) {
    const res = first;
    for (const [k, v] of this.entries()) {
        res = fn(res, [k, v]);
    }
    return res;
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 // Use the generic T for the function's result.
 reduce<T>(fn: (acc: T, val: [K, V]) => T, first): T {
    const res = first;
    for (const [k, v] of this.entries()) {
        res = fn(res, [k, v]);
    }
    return res;
 }
 ```
 :::
::

And that's it! We have implemented `reduce()`{lang="ts"} for our extended `Map`{lang="ts"}.

## Our result

Check out the full source code with even more methods at [retraigo/bettermap](https://github.com/retraigo/bettermap)

::CodeGroup{labels="JavaScript;TypeScript"}
 :::CodeBlock{label="JavaScript" active}
 ```ts
 class ExtendedMap extends Map {
    constructor() {
        super();
    }
    find(fn) {
        for (const [k, v] of this.entries()) {
            if(fn(v, k)) return v;
        }
        return undefined;
    }
    filter(fn) {
        const res = [];
        for (const [k, v] of this.entries()) {
            if(fn(v, k)) res.push(v);
        }
        return res;
    }
    map(fn) {
        const res = [];
        for (const [k, v] of this.entries()) {
            res.push(fn(v, k));
        }
        return res;
    }
    reduce(fn, first) {
        const res = first;
        for (const [k, v] of this.entries()) {
            res = fn(res, [k, v]);
        }
        return res;
    }
 }
 ```
 :::

 :::CodeBlock{label="TypeScript"}
 ```ts
 class ExtendedMap<K, V> extends Map<K, V> {
    constructor() {
        super();
    }
    find(fn: (v: V, k: K) => boolean): V | undefined {
        for (const [k, v] of this.entries()) {
            if(fn(v, k)) return v;
        }
        return undefined;
    }
    filter(fn: (v: V, k: K) => boolean): V[] {
        const res = [];
        for (const [k, v] of this.entries()) {
            if(fn(v, k)) res.push(v);
        }
        return res;
    }
    map<T>(fn: (v: V, k: K) => T): T[] {
        const res = [];
        for (const [k, v] of this.entries()) {
            res.push(fn(v, k));
        }
        return res;
    }
    reduce<T>(fn: (acc: T, val: [K, V]) => T, first): T {
        const res = first;
        for (const [k, v] of this.entries()) {
            res = fn(res, [k, v]);
        }
        return res;
    }
 }
 ```
 :::
::
