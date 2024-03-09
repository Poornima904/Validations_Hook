using {db} from '../db/schema';

service MyService {
    @odata.draft.enabled
 entity Customer as projection on db.Customer;
    
}
