export const goToHome = (history) => {
    history.push('/')
    history.go(0)
}
export const goToCart = (history) => {
    history.push('/carrinho')
    history.go(0)
}