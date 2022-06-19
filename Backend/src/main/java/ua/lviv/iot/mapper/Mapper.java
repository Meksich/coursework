package ua.lviv.iot.mapper;

public interface Mapper <Entity, DTO>{
    DTO map(Entity entity);
}
