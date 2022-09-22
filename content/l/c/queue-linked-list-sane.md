---
title: "Queue using Linked-List in C (single pointer)"
description: "A sligtly sane guide on implementing a queue using a singly linked-list in C"
head.image: "/neko.png"
date: "2022-05-29"
---

# Queue
*<Message type="gray">This article assumes that you have already read [Queue using Linked-List in C](/l/c/queue-linked-list) and does not provide much explanation.</Message>*

This article is a sligtly sane approach towards how a queue works, using only ONE pointer, the `FRONT`.

*<Message type="error">This article was written because of the author's own decision, and does not intend to portray this as the perfect example of a queue.</Message>*

## Structure
The structure is the same as a singly linked-list.

```c
struct Node {
    int data;
    struct Node *next;
};
```

And then the head of our queue,
```c 
struct Node *FRONT;
```


## Code
```c
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *FRONT;

// Following the `insert_at_end` algorithm for a singly linked-list
void enqueue(int item_to_insert) {
    struct Node *new_item = (struct Node *)malloc(sizeof(struct Node));
    new_item->data = item_to_insert;
    new_item->next = NULL;

    if (FRONT == NULL) {
        FRONT = new_item;
    } else {
        struct Node *temp = FRONT;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = new_item;
    }
}

void dequeue() {
    if (FRONT == NULL)
        return; // Return in case of empty queue
    else {
        struct Node *temp = FRONT;
        FRONT = FRONT->next;
        free(temp);
    }
}

```

## See Also
- [Doubly Linked-List](/l/c/double-linked-list)
- [Singly Linked-List](/l/c/single-linked-list)
- [Stack](/l/c/stack-linked-list)