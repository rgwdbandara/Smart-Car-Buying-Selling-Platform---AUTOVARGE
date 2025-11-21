/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return[
            {
                source: "/embed",
                headers: [
                    {
                        key:"Content-security-Policy",
                        value: "frame-src 'self' https://waitlist-734.created.app;", 
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
