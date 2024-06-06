export default function Form ({method = 'post', children, onSubmit}) {
    return <form method={method} onSubmit={onSubmit}>
                {children}
            </form>
}