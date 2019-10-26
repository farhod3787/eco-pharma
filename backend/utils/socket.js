const localEvent = require('../utils/localEvent');
const OrdersRoutes = require('../routes/orders');
// const ReferralsController = require('../controller/referral');

module.exports = async (io) => {
    io
        .of('/socket')
        .on('connection', async (socket) => {
        console.log('Frontend connected: id:', socket.id);

        let countUnresolvedTransactions = await OrdersRoutes.geta();
        socket.emit('orders', countUnresolvedTransactions);
        localEvent.on('orders', (count) => {
            console.log('From socket', count);
            socket.emit('orders', count)
        });

        // let countUnresolvedReferrals = await ReferralsController.getUnresolvedReferrals();
        // socket.emit('referrals', countUnresolvedReferrals);
        // localEvent.on('referrals', (count) => {
        //     console.log('From socket', count);
        //     socket.emit('referrals', count)
        // });

          socket.on('disconnect', () => {
              console.log('frontend disconnected');
          });

    });

};
