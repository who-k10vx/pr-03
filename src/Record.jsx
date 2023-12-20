import React, { useEffect, useState } from 'react'
function Record({ Allrecorddata, btnclick }) {
    const category = [ "All","Blue", "Green", "Yellow", "White"];
    return (
        <div >
            <h1>Star War</h1>

            <div class="d-flex justify-content-center">
                {
                    category.map((cat, i) => {
                        return (
                            <button class=" text-white border-0 rounded px-3 m-2" onClick={() => btnclick(cat)} key={i}>{cat}</button>
                        )
                    })
                }
            </div>
            <br /><br /><br /><br />
            <div class=" container d-flex flex-wrap justify-content-between">
                {
                    Allrecorddata.map((item) => {
                    return (
                            <div class="flex_container">
                                <div class="main_series_container">
                                    <div class="series_container">
                                        <h2 class="name">{item.name} <br /><span class="year">({item.year})</span></h2>
                                        <p class="imdb">IMDb RATING: <span class="review">{item.imd_rating}</span>/10</p>
                                        <p class="price">{item.price}</p>
                                        <button onclick="addToBag(this)">ADD TO BAG</button>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
                <div class="cart">
                    <div class="added_items"></div>
                    <div class="total_container">
                        <p class="total">TOTAL PURCHASE</p>
                        <p class="added_total">€0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Record