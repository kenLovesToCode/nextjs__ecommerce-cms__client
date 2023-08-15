import React from 'react';
import Container from '@/components/ui/container';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                    <Link href="/" className="ml-4 flex lg:ml-9 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
