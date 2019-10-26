let phone = (users, thisuser) => {
    // console.log(users);
    if (!users.find(user => user.phone == thisuser.phone_number)) {
        users.push({ phone: thisuser.phone_number, userId: thisuser.user_id, pharms: [], counts: [], orderStep: 0, description: "", lan: "uz" })
    }
    // console.log(users);

    return users;
}

let addPharmAndCount = (users, pharm_id, count, currentUserId) => {
    let i = 0,
        j = 0;
    users.forEach(user => {
        if (user.userId == currentUserId) {
            if (users[i].pharms.find(pharm => {
                    if (pharm == pharm_id) {
                        users[i].counts[j] = count;
                        return pharm;
                    }
                    j++;
                })) {

            } else {
                users[i].pharms.push(pharm_id)
                users[i].counts.push(count)
            }
        }
        i++;
        j = 0;
    })

    return users;
}

let checkParm = (checkedPharms, pharm, currentUserId) => {
    let i = 0;
    if (checkedPharms.find(chPharm => {
            if (chPharm.userId == currentUserId) {
                checkedPharms[i].pharm_id = pharm._id;
                checkedPharms[i].rate = pharm.rate;
                return chPharm;
            }
            i++;
        })) {

    } else {
        checkedPharms.push({ userId: currentUserId, pharm_id: pharm._id, rate: pharm.rate })
    }

    return checkedPharms;
}

let addLanUser = (langUsers, currentUserId) => {

    if (!langUsers.find(lanUser => lanUser.userId == currentUserId)) {
        langUsers.push({ userId: currentUserId, lan: "uz" })
    }

    return langUsers;
}

module.exports = { phone, checkParm, addPharmAndCount, addLanUser }