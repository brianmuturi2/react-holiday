import React, {useState} from 'react';
import {useQuery, useMutation, gql} from '@apollo/client';
import OfferTile from './OfferTile.js';

export default function OfferListing() {
    const LOADING = "Loading offers";
    const ERROR = "Failed to load offers";

    const GET_OFFERS = gql`
        query getOffers {
            offers(limit: 10, sort: {by: NAME, order: ASC}) {
                id
                name
                description
                imageUrl
                dateAdded
                value
                currency
                visitedCount
            }   
        }
    `;

    const UPDATE_VISITED = gql`
        mutation markVisited($offerId: String!) {
            markVisited(offerId: $offerId) {
                id
                name
                description
                imageUrl
                dateAdded
                value
                currency
                visitedCount
            }
        }
    `;

    const {loading, error, data} = useQuery(GET_OFFERS);

    //const [markVisited, { data, loading, error }] = useMutation(UPDATE_VISITED);

    if (error) {
        return <div>{LOADING}</div>
    }

    if (loading) {
        return <div>{ERROR}</div>
    }

    return (
        <>
            {
                data.offers.map((offer, i) => (
                    <OfferTile
                        key={i}
                        name={offer.name}
                        visitedCount={offer.visitedCount}
                        price={`${offer.value} ${offer.currency}`}
                        imageUrl={offer.imageUrl}
                        description={offer.description ? offer.description : ''}
                        clickHandler={markVisited.bind(offer.ID)}
                    />
                ))
            }
        </>
    )
}
