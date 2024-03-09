using MyService as service from '../../srv/service';

annotate service.Customer with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'cust_id',
            Value : cust_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_name',
            Value : cust_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_address',
            Value : cust_address,
        },
    ]
);
annotate service.Customer with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'cust_id',
                Value : cust_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_name',
                Value : cust_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_address',
                Value : cust_address,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
