import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <div>
                        {/* Favicons */}
                        <link href="assets/img/favicon.png" rel="icon" />
                        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
                        {/* Google Fonts */}
                        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
                        {/* Vendor CSS Files */}
                        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                        {/* Template Main CSS File */}
                        <link href="assets/css/style.css" rel="stylesheet" />
                        <link href='https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css' />
                    </div>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
                    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
                    <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
                    <script src="assets/vendor/purecounter/purecounter.js"></script>
                    <script src="assets/vendor/aos/aos.js"></script>
                    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                    <script src="assets/vendor/typed.js/typed.min.js"></script>
                    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
                    <script src="assets/vendor/php-email-form/validate.js"></script>
                    <script src="assets/js/main.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument