import {Order} from '../shared/Order';
import {OrderLine} from '../shared/OrderLine';

export let ORDERS: Order[] = [
            new Order(
                '42500',
                '350000525',
                '3298284',
                'Giacomo',
                'Guilizzoni',
                '20/03/2016',
                3,
                [
                    new OrderLine('Erik light blue distressed straight-leg jeans', 155.00 , 'http://mediav2.harveynichols.com/catalog/product/cache/1/gallery/390x546/0dc2d03fe217f8c83829496872af24a0/5/8/583554_denim_1.jpg', 1),
                    new OrderLine('Monochrome cotton blend broderie anglaise dress', 455.00 , 'http://mediav2.harveynichols.com/catalog/product/cache/1/gallery/390x546/0dc2d03fe217f8c83829496872af24a0/5/7/572702_black_and_white_1.jpg', 3),
                    new OrderLine('Ruffled cotton shirt dress', 237.50, 'http://mediav2.harveynichols.com/catalog/product/cache/1/gallery/390x546/0dc2d03fe217f8c83829496872af24a0/5/6/565685_blue_1.jpg',1),
                ]),
            new Order(
                '144717',
                '351225892',
                '3298285',
                'Pallavi',
                'Barve',
                '21/03/2016',
                3,
                [
                    new OrderLine('Ikat Heart cream jersey chemise', 21.67,'http://mediav2.harveynichols.com/catalog/product/cache/1/gallery/390x546/0dc2d03fe217f8c83829496872af24a0/5/6/567451_cream_and_other_1.jpg',2),
                    new OrderLine('Goody Bars - Belgian Milk Chocolate Strawberry With Live Cultures ', 3.29,'http://mediav2.harveynichols.com/catalog/product/cache/1/gallery/390x546/0dc2d03fe217f8c83829496872af24a0/5/7/573860_1.jpg',3),
                ])
];