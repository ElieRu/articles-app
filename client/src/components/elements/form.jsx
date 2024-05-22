export default function Form ({method = 'post', children}) {
    return <form method={method}>
                {children}
            </form>
}