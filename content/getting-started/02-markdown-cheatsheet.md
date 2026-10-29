---
title: Markdown cheatsheet
description: Math, tables, code and task lists, with examples you can copy.
tags: [guide]
---

## Math

Inline math sits in a sentence: the sag of a conductor is $S = \frac{wL^2}{8T}$.

Block math gets its own line:

$$
\eta_{string} = \frac{V_{string}}{n \times V_{top}} \times 100\%
$$

## Tables

| Quantity | Symbol | Unit |
|----------|--------|------|
| Voltage | $V$ | volt |
| Current | $I$ | ampere |
| Power | $P$ | watt |

## Code

```python
import numpy as np

def sag(w, L, T):
    return w * L**2 / (8 * T)

print(sag(1.2, 300, 20000))
```

## Task list

- [x] Set up the site
- [ ] Add my first chapter
- [ ] Deploy to Vercel

## Quote and footnote

> A good note says one thing clearly.

Footnotes work too.[^1]

[^1]: Like this one.
