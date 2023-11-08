# Cache
## In memory cache
The algorithm will calculate fibonacci number and will generate series. Will generate a cache for the next time the same number is requested. 

Request URL: 
```
/cached/fibonacci/:number
```

To see the difference use number >= 30
The cache timeout(ttl) can be changed in the ``src/app/modules/cached/cached.service.ts`` file
```typescript
fibonacciCacheTTL: number = 15 * 1000;
```

# Redis cache

> To be implemented