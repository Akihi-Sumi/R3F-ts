import React from "react";

import { Section } from './section';
import { Card } from './card';

export const Main = () => {
    return (
        <main role="main">
            <Section />
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </main>
    );
};