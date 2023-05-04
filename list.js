const listTruc = [
    {
        "id":1,
        "libelle":"machin",
        "parent_id": null
    },
    {
        "id":2,
        "libelle":"machin",
        "parent_id": null
    },
    {
        "id":3,
        "libelle":"machin",
        "parent_id": null
    },
    {
        "id":11,
        "libelle":"machin",
        "parent_id": 1
    },
    {
        "id":12,
        "libelle":"machin",
        "parent_id": 1
    },
    {
        "id":21,
        "libelle":"machin",
        "parent_id": 2
    }
]

$('#yoohoo').on('change',() => {
    console.log($('#yoohoo').val())
    console.log(listTruc.filter( el => el.parent_id == parseInt($('#yoohoo').val()) ))
})
