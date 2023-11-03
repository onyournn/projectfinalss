import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('typechairs')
    },
    show(chairId) {
        return Api().get('typechair/' + typechairId)
    },
    post(chair) {
        return Api().post('typechair',typechair)
    },
    put(chair) {
        return Api().put('typechair/'+typechair.id,typechair)
    },
    delete(chair) {
        return Api().delete('typechair/'+typechair.id,typechair)
    },
}