import {FORMATS_FOR_DATE_AND_TIME, GET_TYPE_ASSISTANCE, SEND_INFO} from '../ENV';
import Cat_zonas from '../models/cat_zonas.model';
import status from 'http-status';

exports.PostZone = async (req,res) => {
    const zone = req.body;
    await Cat_zonas.create(zone)
    .then(data => {
        SEND_INFO(res, data, "Zone inserted succesfully", status.CREATED);
    })
    .catch(err => {
        SEND_INFO(res, err, "Zone could not be inserted", status.INTERNAL_SERVER_ERROR);
    });
};

exports.GetZonesList = async (req,res) => {
    await Cat_zonas.find()
    .then(data => {
        data.length == 0 ? 
        SEND_INFO(res, "Nothing", "Zones not found", status.NOT_FOUND):
        SEND_INFO(res, data, "Zones recuperated succesfully", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "Zones could not be recuperated", status.INTERNAL_SERVER_ERROR);
    });
};

exports.GetZone = async (req,res) => {
    const id = req.params.id;
    await Cat_zonas.findById(id)
    .then(data => {
        data == null ?
        SEND_INFO(res, "Nothing", "Zone not found", status.NOT_FOUND):
        SEND_INFO(res, data, "Zone recuperated succesfully", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "Zone could not be recuperated", status.INTERNAL_SERVER_ERROR);
    });
};

exports.PutZone = async (req,res) => {
    const id = req.params.id;
    const zona = req.body;
    await Cat_zonas.findByIdAndUpdate(id, zona, {new: true})
    .then(data => {
        data == null ?
        SEND_INFO(res, "Nothing", "Zone not found", status.NOT_FOUND):
        SEND_INFO(res, data, "Zone updated succesfully", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "Zone could not be updated", status.INTERNAL_SERVER_ERROR);
    });
};

exports.DeleteZone = async (req,res) => {
    const id = req.params.id;
    await Cat_zonas.findByIdAndDelete(id)
    .then(data => {
        data == null ?
        SEND_INFO(res, "Nothing", "Zone not found", status.NOT_FOUND):
        SEND_INFO(res, data, "Zone removed succesfully", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "Zone could not be removed", status.INTERNAL_SERVER_ERROR);
    });
};