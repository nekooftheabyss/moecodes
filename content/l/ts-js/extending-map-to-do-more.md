---
title: 'Extending the Map to do more'
description: 'A guide on extending the built-in JavaScript Map to add more operations and stuff.'
head.image: '/neko.png'
date: '2022-05-29'
---

# Extending the Map
A **map** is an abstract data type composed of **key-value** pairs. JavaScript comes with the 
built-in `Map`{lang="ts"} object that allows creating a map easily.

<CodeGroup labels="JavaScript TypeScript">

<CodeBlock label="JavaScript" :active="true">

```ts
const myMap = new Map()
map.set("foo", "bar")

console.log(map.get("foo"))
```

</CodeBlock>

<CodeBlock label="TypeScript">

```ts
const myMap = new Map<string, string>()
map.set("foo", "bar")

console.log(map.get("foo"))
```

</CodeBlock>

</CodeGroup>


Pretty easy, isn't it?


However, the methods available on a Map are very limited, namely:
- `Map.prototype.clear()`{lang="ts"}
- `Map.prototype.delete()`{lang="ts"}
- `Map.prototype.entries()`{lang="ts"}
- `Map.prototype.forEach()`{lang="ts"}
- `Map.prototype.get()`{lang="ts"}
- `Map.prototype.has()`{lang="ts"}
- `Map.prototype.keys()`{lang="ts"}
- `Map.prototype.set()`{lang="ts"}
- `Map.prototype.values()`{lang="ts"}

In this article, you'll be guided to extend the `Map`{lang="ts"} object and add more methods
for ease of use. The following are the list of methods we will be implementing:
- `find()`{lang="ts"}
- `filter()`{lang="ts"}
- `every()`{lang="ts"}
- `some()`{lang="ts"}
- `map()`{lang="ts"}
- `reduce()`{lang="ts"}

Now let's move on to implementing them.

## Extending a Class

Classes in JavaScript can be extended using the `extends`{lang="ts"} keyword.