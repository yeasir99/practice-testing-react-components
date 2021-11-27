export const compose =
  (...Fns) =>
  (...x) => {
    let state = true
    return Fns.reduceRight(
      (acc, fn) =>
        fn(
          ...(state
            ? (() => {
                state = false
                return acc
              })()
            : [acc]),
        ),
      x,
    )
  }
