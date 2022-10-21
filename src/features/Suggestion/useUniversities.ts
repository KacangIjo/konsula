import { useCallback, useMemo, useState } from 'react';

type University = {
    id: string;
    imgUrl: string;
    rank: string;
    name: string;
    tuition: number;
    admin: number;
    living: number;
    location: 'local' | 'abroad';
    type: 'public' | 'private'
};

export type Filter = {
    location?: 'local' | 'abroad';
    type?: 'public' | 'private';
    living?: number;
    tuition: number;
    year: number;
}

const useUniversities = () => {
    const [year, setYear] = useState(2023);
    const [filter, setFilter] = useState<Filter>({
                                                     location: undefined,
                                                     type: undefined,
                                                     living: undefined,
                                                     tuition: 250000000,
                                                     year: 2028
                                                 });
    const [data] = useState([{
        id: '1',
        imgUrl: '/images/ui.jpg',
        name: 'Universitas Indonesia',
        tuition: 35000,
        living: 5000000,
        admin: 10000000,
        rank: '248',
        location: 'local',
        type: 'public'
    }, {
        id: '2',
        imgUrl: '/images/itb.jpg',
        name: 'Institut Teknologi Bandung',
        tuition: 25000000,
        living: 5000000,
        admin: 10000000,
        rank: '235',
        location: 'local',
        type: 'public'
    }, {
        id: '3',
        imgUrl: '/images/prasmul.jpg',
        name: 'Prasetiya Mulya',
        tuition: 25000000,
        living: 6000000,
        admin: 10000000,
        rank: '9230',
        location: 'local',
        type: 'private'
    }, {
        id: '4',
        imgUrl: '/images/ntu.jpg',
        name: 'Nanyang Technological University, Singapore',
        tuition: 180000000,
        living: 8000000,
        admin: 10000000,
        rank: '19',
        location: 'abroad',
        type: 'private'
    }, {
        id: '5',
        imgUrl: '/images/uva.jpg',
        name: 'University Van Amsterdam, Netherlands',
        tuition: 75000000,
        living: 15000000,
        admin: 10000000,
        rank: '58',
        location: 'abroad',
        type: 'public'
    }, {
        id: '6',
        imgUrl: '/images/monash.jpg',
        name: 'Monash University',
        tuition: 7000000,
        living: 8000000,
        admin: 10000000,
        rank: '57 (Group)',
        location: 'abroad',
        type: 'public'
    }] as University[]);
    
    const filtered = useMemo(() => {
        let _filtered = data;
        
        if (filter.location) {
            _filtered = _filtered.filter(uni => uni.location === filter.location);
        }
        
        if (filter.type) {
            _filtered = _filtered.filter(uni => uni.type === filter.type);
        }
        
        if (filter.tuition) {
            _filtered = _filtered.filter(uni => uni.tuition <= filter.tuition);
        }
        
        if (filter.year && filter.year > 2023) {
            setYear(2023);
        }
        
        return _filtered;
    }, [data, filter, setYear]);
    
    const _setFilter = useCallback((newFilter: Filter) => {
        setFilter(newFilter);
    }, []);
    
    return {
        data: filtered,
        currentFilter: filter,
        setFilter: _setFilter,
        year
    };
};

export default useUniversities;
