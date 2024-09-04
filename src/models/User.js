import glucides from '../assets/diet/glucides.png'
import proteines from '../assets/diet/proteines.png'
import calories from '../assets/diet/calories.png'
import lipides from '../assets/diet/lipides.png'

/**
 * Class representing a user.
 */
class User {
    /**
     * Creates a user.
     * @param   {Object}     data                            The data object fetched from API.
     * @param   {!Number}    data.id                         The user's id.
     * @param   {Object}     data.userInfos                  The user's personal informations.
     * @param   {!String}    data.userInfos.firstName        The user's first name.
     * @param   {!String}    data.userInfos.lastName         The user's last name.
     * @param   {!Number}    data.userInfos.age              The user's age. Must be an integer.
     * @param   {Number}     data.todayScore                 The user's score. Must be an decimal number.
     * @param   {Object}     data.keyData                    The user's nutritional values data.
     * @param   {Number}     data.keyData.calorieCount       The user's calorie value. Must be an integer.
     * @param   {Number}     data.keyData.proteinCount       The user's protein value. Must be an integer.
     * @param   {Number}     data.keyData.carbohydrateCount  The user's carbs value. Must be an integer.
     * @param   {Number}     data.keyData.lipidCount         The user's fat value. Must be an integer.
     */
    constructor(data) {
        this.userId = data.id;
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.score = data.todayScore || data.score;
        this.keyDatas = [
            {
                name: 'Calories',
                measure: 'kCal',
                img: calories,
                quantity: data.keyData.calorieCount,
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
            },
            {
                name: 'Proteines',
                measure: 'g',
                img: proteines,
                quantity: data.keyData.proteinCount,
                backgroundColor: 'rgba(74, 184, 255, 0.1)',
            },
            {
                name: 'Glucides',
                measure: 'g',
                img: glucides,
                quantity: data.keyData.carbohydrateCount,
                backgroundColor: 'rgba(249, 206, 35, 0.1)',
            },
            {
                name: 'Lipides',
                measure: 'g',
                img: lipides,
                quantity: data.keyData.lipidCount,
                backgroundColor: 'rgba(253, 81, 129, 0.1)',
            }
        ]
    }

}

export default User