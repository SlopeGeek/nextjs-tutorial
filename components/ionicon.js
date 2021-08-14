import Head from 'next/head'

export default function Ionicon() {
    return (
        <div>
            <Head>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </Head>
        </div>
    )
}