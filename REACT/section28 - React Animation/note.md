React Animation
---

## CSS
- `keyframes`
```
.modal {
  top: 10%;
  border-radius: 6px;
  padding: 1.5rem;
  width: 30rem;
  max-width: 90%;
  z-index: 10;
  animation: slide-up-fade-in 300ms ease-out forwards;
}

/* keyframes */
@keyframes slide-up-fade-in {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```
- `transition`
```
/* (1) Added Animation */
.challenge-item-details-icon {
  display: inline-block;
  font-size: 0.85rem;
  margin-left: 0.25rem;
  /* CSS Transition Added */
  transition: transform 300ms ease-out;
}
```

## Complex Animation with Framer Motion
-

## Animating Elements In & out
-

## Scroll-based Animations
-